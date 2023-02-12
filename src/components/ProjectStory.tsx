import styled, { css } from 'styled-components';
import { ProjectStoryType } from '../db/projectData';

const ProjectStoryHeading = styled.h2`
  font-size: 1rem;
  font-weight: 700;
`;
const ProjectStoryLangPargraph = styled.p`
  margin-bottom: 1em;
  line-height: 1;
`;
const ProjectStoryLangSpan = styled.span`
  display: inline-block;
  padding: 0.9em;
  margin: 0 1em 1em 0;
  border-radius: 2em;
  border: 1px solid;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
`;
const ProjectStoryDescBox = styled.div`
  visibility: hidden;
  padding-top: 2em;
  clip-path: inset(0 0 100% 0);
  font-size: 1.125rem;
  font-weight: 400;
  text-align: justify;
  line-height: 1.6;
  word-break: break-all;
  white-space: pre-line;
  transition: all 0.5s;
`;
const ProjectStoryButton = styled.button`
  position: absolute;
  top: 50%;
  right: 50%;
  width: 7vw;
  height: 7vw;
  border-radius: 50%;
  opacity: 1;
  transform: translate(50%, -50%);
  transition: all 0.5s;
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    right: 50%;
    background-color: #121212;
    transform: translate(50%, -50%);
    transition: all 0.5s;
    content: '';
  }
  &::before {
    width: 100%;
    height: 2px;
  }
  &::after {
    width: 2px;
    height: 100%;
  }
  &:hover {
    transform: translate(50%, -50%) scale(1.1);
    &::before,
    &::after {
      transform: translate(50%, -50%) rotate(90deg);
    }
  }
  @media screen and (max-width: 992px) {
    width: 14vw;
    height: 14vw;
  }
`;
const ProjectStoryRow = styled.div<{ active: boolean }>`
  position: relative;
  padding: var(--container-padding);
  border-bottom: 1px solid var(--color-grey-light);
  ${(props) =>
    props.active &&
    css`
      ${ProjectStoryButton} {
        top: var(--container-padding);
        right: var(--container-padding);
        width: 2vw;
        height: 1rem;
        transform: none;
        &::after {
          visibility: hidden;
          width: 0;
          height: 0;
        }
        &:hover {
          &::before {
            transform: none;
          }
        }
        @media screen and (max-width: 992px) {
          width: 5vw;
        }
      }
      ${ProjectStoryDescBox} {
        visibility: visible;
        clip-path: inset(0 0 0 0);
      }
    `}
`;

type ActiveType = {
  active: number[];
  setActive: React.Dispatch<React.SetStateAction<number[]>>;
};

type Props = ActiveType & {
  item: ProjectStoryType;
};

export default function ProjectStory({ item, active, setActive }: Props) {
  const handleActiveItem = (e: React.MouseEvent) => {
    if (e.currentTarget instanceof HTMLButtonElement) {
      const index = Number(e.currentTarget.dataset.id);
      if (active.indexOf(index) >= 0) {
        //제거
        setActive(active.filter((num) => num !== index));
      } else {
        //추가
        setActive([...active, index]);
      }
    }
  };

  return (
    <ProjectStoryRow active={active.indexOf(item.id) >= 0}>
      <ProjectStoryHeading as='h4'>{item.title}</ProjectStoryHeading>
      <ProjectStoryDescBox>
        {item.lang && (
          <ProjectStoryLangPargraph>
            {item.lang.map((item, index) => (
              <ProjectStoryLangSpan key={index}>{item}</ProjectStoryLangSpan>
            ))}
          </ProjectStoryLangPargraph>
        )}
        {item.desc}
      </ProjectStoryDescBox>
      <ProjectStoryButton data-id={item.id} onClick={handleActiveItem} />
    </ProjectStoryRow>
  );
}

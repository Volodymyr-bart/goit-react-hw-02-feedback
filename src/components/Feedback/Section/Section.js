import { TitleSection } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <div>
      <TitleSection>{title}</TitleSection>
      {children}
    </div>
  );
};

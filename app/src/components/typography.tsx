import styled from "styled-components/native";

const defaultTextStyles = (theme: any) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;
const title = (theme: any) => `
    font-size: ${theme.fontSizes.title};
    
`;

const hint = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: any) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: any) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: any) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;
const paragraph = (theme: any) => `
font-family: ${theme.fonts.heading};
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.medium};
color: ${theme.colors.text.secondary};
line-height: ${theme.lineHeights.copy};

`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  paragraph,
  title,
};

export const Text = styled.Text<ITextProps>`
  ${({ theme }: ITextProps) => defaultTextStyles(theme)}
  ${({ variant, theme }: ITextProps) => variants[variant](theme)}
`;

interface ITextProps {
  theme: any;
  variant:
    | "body"
    | "label"
    | "caption"
    | "error"
    | "hint"
    | "title"
    | "paragraph";
}

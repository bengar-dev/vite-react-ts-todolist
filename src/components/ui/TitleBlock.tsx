interface TitleBlockProps {
  title: string;
}

export const TitleBlock = (props: TitleBlockProps) => {
  const { title } = props;
  return (
    <h1 className="text-white first-letter:text-blue-300 font-medium text-xl">
      {title}
    </h1>
  );
};

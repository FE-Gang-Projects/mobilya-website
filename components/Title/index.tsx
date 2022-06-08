const Title = ({ text }: { text: string }) => {
  return (
    <div className={`title-container`}>
      <div className="title-hr" />
      <span className="main-page-title">{text}</span>
      <div className="title-hr" />
    </div>
  );
};

export default Title;

const Title = ({ text, margin }: { text: string; margin?: 'sm' }) => {
  return (
    <div className={`title-container ${margin ? 'm-30' : ''}`}>
      <div className="title-hr" />
      <span className="main-page-title">{text}</span>
      <div className="title-hr" />
    </div>
  );
};

export default Title;

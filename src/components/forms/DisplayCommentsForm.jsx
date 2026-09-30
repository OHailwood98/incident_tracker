const DisplayCommentsForm = ({ comments }) => {
  if (!comments) {
    return (
      <div>
        <h5>
          No Comments have been added to this Incident, why not be the first
        </h5>
      </div>
    );
  }

  return <div>{comments.length}</div>;
};

export default DisplayCommentsForm;

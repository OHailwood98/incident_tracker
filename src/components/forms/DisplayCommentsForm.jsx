import DisplayComment from "./DisplayComment";

const DisplayCommentsForm = ({ comments }) => {
  var commentList = comments?.map((comment) => {
    return <DisplayComment commentData={comment} />;
  });
  if (!comments) {
    return (
      <div>
        <h5>
          No Comments have been added to this Incident, why not be the first
        </h5>
      </div>
    );
  }

  return <div>{commentList}</div>;
};

export default DisplayCommentsForm;

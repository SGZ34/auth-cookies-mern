export const CardForm = ({ children, title }) => {
  return (
    <div className="col-md-6 offset-3">
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">{title}</h3>
        </div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

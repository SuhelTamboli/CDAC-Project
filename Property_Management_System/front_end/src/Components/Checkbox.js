const Checkbox = (props) => {
  return (
    <div>
      <div class="form-check ml-5">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          {props.title}
        </label>
      </div>
    </div>
  );
};

Checkbox.defaultProps = {
  title: "",
};

export default Checkbox;

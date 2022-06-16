export const Select = (props) => {
  const { data } = props;
  return (
    <>
      <div className="container mx-auto" style={{maxWidth:'30%'}}>
          <select class="form-select">
            <option selected>Select Country</option>
            {data.Countries &&
              data.Countries.map((res) => (
                <option value={res.Slug}>{res.Country}</option>
              ))}
          </select>
        </div>
    </>
  );
};

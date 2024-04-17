const Service = ({ img }) => {
  return (
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <div class="thumbnail">
        <span class="img">
          <img src={img} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Service;

const Panel = ({ img, desc }) => {
  return (
    <div class="panel panel-cta" style={{ fontSize: "1.3125rem" }}>
      <div class="panel-body">
        <div class="col-lg-8">
          <p><b>{desc}</b></p>
        </div>
        <div class="col-lg-4 text-right">
          <img src={img} alt="" style={{ width: 150 }} />
        </div>
      </div>
    </div>
  )
}

export default Panel;

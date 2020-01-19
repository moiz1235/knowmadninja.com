import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					{/* <span className="heading-meta">Read</span> */}
					<h2 className="colorlib-heading">Adventures</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a  className="blog-img"><img src="images/Scuba.JPG" className="img-responsive" alt="Oops! Something went wrong.." /></a>
						<div className="desc">
							<span><small>February, 2017 </small> | <small>Pondicherry </small></span>
							 <h3>Pondicherry Team Trip </h3>{/* <h3><a href="blog.html">Renovating National Gallery</a></h3> */}
							{/*Description = <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a  className="blog-img"><img src="images/Spiti.jpg" className="img-responsive" alt="Oops! Something went wrong.." /></a>
						<div className="desc">
							<span><small>June, 2019 </small> | <small> Himachal </small></span>
							<h3>{/*<a href="blog.html">*/}Spiti Valley Road Trip</h3>
							{/* <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a  className="blog-img"><img src="images/Mangalore.JPG" className="img-responsive" alt="Oops! Something went wrong.." /></a>
						<div className="desc">
							<span><small>March, 2019 </small> | <small> Mangalore </small> {/*| <small> <i className="icon-bubble3" /> 4</small>*/}</span>
							<h3>{/*<a href="blog.html">*/}Kayaking at Mulki</h3>
							{/* <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a  className="blog-img"><img src="images/Skandagiri1.jpg" className="img-responsive" alt="Oops! Something went wrong.." /></a>
						<div className="desc">
							<span><small>January, 2019 </small> | <small>Karnataka </small></span>
							 <h3> Sunrise at Skandagiri </h3>{/* <h3><a href="blog.html">Renovating National Gallery</a></h3> */}
							{/*Description = <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a  className="blog-img"><img src="images/Kodachadri2.jpg" className="img-responsive" alt="Oops! Something went wrong.." /></a>
						<div className="desc">
							<span><small>July, 2018 </small> | <small>Shimoga </small></span>
							 <h3> Kodachadri Trek </h3>{/* <h3><a href="blog.html">Renovating National Gallery</a></h3> */}
							{/*Description = <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a  className="blog-img"><img src="images/Saklespur.jpg" className="img-responsive" alt="Oops! Something went wrong.." /></a>
						<div className="desc">
							<span><small>December, 2019 </small> | <small>Hassan </small></span>
							 <h3> Year End at Sakleshpur</h3>{/* <h3><a href="blog.html">Renovating National Gallery</a></h3> */}
							{/*Description = <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
						</div>
					</div>
					</div>
				</div>
				{/* <div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div> */}
			</div>
			</section>
      </div>
    )
  }
}

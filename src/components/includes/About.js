import React from 'react';

const About = () => {
  return (
<div className="about" id="about">
	<div className="container">
		<h2 className="heading">About foodCafe</h2>
		<div className="col-md-7 aboutleft">
			<h3>We provide seasonal & unseasonal fruits with quality</h3>
			<h3>We grow best organic food</h3>
			<p>Sed hendrerit vel urna in faucibus. Praesent porta, enim a viverra tincidunt, tortorin urna porta ligula,
			venenatis vestibulum sapien augue vitae ligula. Phasellus vel augue sem. Nulla auctor elit augue, eu volutpat 
			risus tincidunt ullamcorper. Su spendisse id ante molestie libero placerat condimentum. Maecenas in conse 
			quatlibero. Maecenas nisi sapien, porttitor et pulvinar non </p>
			<div className="more">
				<a href="#" className="hvr-shutter-in-vertical" data-toggle="modal" data-target="#myModal">Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
			</div>
		</div>
		<div className="col-md-5 aboutright">
			<div className="sreen-gallery-cursual">
				<div id="owl-demo" className="owl-carousel">
					<div className="item-owl">
					    <div className="test-review">
							<div className="img-agile">
								<img src="images/apple.png" className="img-responsive" alt=""/>
							</div>
					    </div>
					</div>
					<div className="item-owl">
					    <div className="test-review">
							<div className="img-agile">
								<img src="images/banana.png" className="img-responsive" alt=""/>
							</div>
						</div>
					</div>
					<div className="item-owl">
					    <div className="test-review">
							<div className="img-agile">
								<img src="images/lemon.png" className="img-responsive" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="clearfix"></div>
	</div>
</div>
  );
};

export default About;

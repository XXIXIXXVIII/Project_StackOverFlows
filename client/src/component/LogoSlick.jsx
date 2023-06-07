import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class LogoSlick extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      // speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "linear"
     
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="mb-10">
            <div className="w-4/5 h-full mx-auto grid grid-flow-col items-center justify-center gap-14">
              <img
                className="object-cover h-[41px]"
                src="https://cdn.sstatic.net/Img/product/teams/logos/logitech-alt.svg?v=a99c74b88566"
              />
              <img
                className="object-cover py-2 h-[41px]"
                src="https://cdn.sstatic.net/Img/product/teams/logos/philips-alt.svg?v=7fc60c993103"
              />
              <img
                className="object-cover h-[41px]"
                src="https://cdn.sstatic.net/Img/product/teams/logos/verizon-media-alt.svg?v=f335b20096b2"
              />
              <img
                className="object-cover h-[41px]"
                src="https://cdn.sstatic.net/Img/product/teams/logos/box-alt.svg?v=eb76fd9d884f"
              />
            </div>{" "}
          </div>

          <div>
            <div className="w-4/5 mx-auto grid grid-flow-col object-cover">
              <div>
                <img
                  className="object-cover"
                  src="https://cdn.sstatic.net/Img/product/teams/logos/microsoft-alt.svg?v=e57319450314"
                />
              </div>
              <div>
                <img
                  className="object-cover"
                  src="https://cdn.sstatic.net/Img/product/teams/logos/intercom-alt.svg?v=3eda71aed47c"
                />
              </div>
              <div>
                <img
                  className="object-cover"
                  src="https://cdn.sstatic.net/Img/product/teams/logos/overstock-alt.svg?v=ed38ea932870"
                />
              </div>
              <div>
                <img
                  className="object-cover"
                  src="	https://cdn.sstatic.net/Img/product/teams/logos/dialpad-alt.svg?v=4e63facf7f79"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="w-4/5 mx-auto grid grid-flow-col object-cover">
              <div>
                <img
                  className="object-cover"
                  src="https://cdn.sstatic.net/Img/product/teams/logos/wisetech-global-alt.svg?v=3b6b11e76536"
                />
              </div>
              <div>
                <img
                  className="object-cover"
                  src="	https://cdn.sstatic.net/Img/product/teams/logos/instacart-alt.svg?v=15bd0b39b197"
                />
              </div>
              <div>
                <img
                  className="object-cover"
                  src="https://cdn.sstatic.net/Img/product/teams/logos/barkbox-alt.svg?v=419890745024"
                />
              </div>
              <div>
                <img
                  className="object-cover"
                  src="https://cdn.sstatic.net/Img/product/teams/logos/expensify-alt.svg?v=375099b85ce5"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="w-[49px] h-[55px] mx-auto">
              <img
                className="mx-auto h-full object-cover"
                src="https://cdn.sstatic.net/Img/product/teams/logos/chevron-alt.svg?v=3bfd2c06a64b"
              ></img>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

import React from "react";

const Stats = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 p-5">
            <h2 className="mb-5 fs-3">Trust with confidence</h2>
            <h4 className="fs-4">Customer always first</h4>
            <p className="text-muted">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h4 className="fs-4">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h4 className="fs-4">The zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h4 className="fs-4">Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6 p-5">
            <img className="w-100" src="media/images/ecosystem.png" />
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <a href="">
                    Explore our products <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="col-6">
                  <a href="">
                    Explore kite demo <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;

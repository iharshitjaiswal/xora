import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { features, plans } from "../constants";
import Button from "../Components/Button";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  const [prices, setPrices] = useState(plans.map((plan) => plan.priceMonthly)); // Store current prices for plans

  // Smooth count-up/count-down effect without decimals
  useEffect(() => {
    const startPrices = prices; // Start from current prices
    const endPrices = monthly
      ? plans.map((plan) => plan.priceMonthly)
      : plans.map((plan) => plan.priceYearly);

    const duration = 300; // Duration in ms for the count-up/count-down effect
    const startTime = performance.now();

    const animate = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1

      const newPrices = startPrices.map((startPrice, index) => {
        const endPrice = endPrices[index];
        // Calculate and round the price to the nearest whole number
        return Math.round(startPrice + (endPrice - startPrice) * progress);
      });

      setPrices(newPrices);

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue animation if not yet done
      }
    };

    requestAnimationFrame(animate); // Start animation
  }, [monthly]);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-24 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-30 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-30 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:l1 max-sm:max-w-sm">
              Flexible pricing for teams of all
            </h3>
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div>
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          {/* plans */}
          <div className="scroll-hide relative z-2 -mt-10 flex items-start lg:justify-center max-xl:gap-6 max-xl:overflow-auto max-xl:pt-6 lg:pb-10">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-6 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(30%+0px)]"
              >
                {index === 1 && (
                  <div className="g4 absolute h-[270px] left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                )}
                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top-6 xl:-top-11"
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl",
                      index === 1 ? "size-[120px]" : "size-[88px]"
                    )}
                  />
                </div>
                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-20" : "pt-10"
                  )}
                >
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-2 border-2 px-4 py-1.5 uppercase",
                      index === 1 ? "border-p3 text-p3" : "border-p1 text-p1"
                    )}
                  >
                    {plan.title}
                  </div>
                  <div className="relative z-2 flex items-center justify-center">
                    <div
                      className={clsx(
                        "h-num md:h-num-pricing flex items-start",
                        index === 1 ? "text-p3" : "text-p4"
                      )}
                    >
                      ${prices[index]}
                    </div>
                    <div className="small-1 relative top-3 ml-1 uppercase">
                      /mo
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    "body-1-pricing relative z-2 w-full border-b-s2 pb-6 text-center text-p4",
                    index === 1 && "pb-10"
                  )}
                >
                  {plan.caption}
                </div>
                <ul className="mx-auto space-y-2 xl:px-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-4"
                    >
                      <img
                        src="/images/check.png"
                        alt="check"
                        className="size-10 object-contain"
                      />
                      <p className="flex-1">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex w-full justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>

                {index === 1 && (
                  <p className="small-compact mt-6 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    Limited time offer
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;

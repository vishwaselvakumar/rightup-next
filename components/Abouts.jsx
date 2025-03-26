import Image from "next/image";
import about1 from "@/public/work/about1.jpg";
import about2 from "@/public/work/about2.jpg";


const Abouts = () => {
  return (
   <>


<section className="py-24 relative">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
          <Image
            className=" rounded-xl object-cover"
            src={about1}
            alt="about Us image"
          />
        </div>
        <Image
          className="sm:ml-0 ml-auto rounded-xl object-cover"
          src={about2}
          alt="about Us image"
        />
      </div>
      <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-center items-start gap-8 flex">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Empowering Each Other to Succeed
            </h2>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              Every project  undertaken has been a collaborative effort
              where every person involved has left their mark. Together
              not only constructed buildings but also built enduring connections
              that define our success story
            </p>
          </div>
          <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                33+
              </h3>
              <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                Years of Experience
              </h6>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                125+
              </h4>
              <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                Successful Projects
              </h6>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                52+
              </h4>
              <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                Happy Clients
              </h6>
            </div>
          </div>
        </div>
        <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
          <span className="px-1.5 text-white text-sm font-medium leading-6">
            Read More
          </span>
        </button>
      </div>
    </div>
  </div>
</section>




   </>
  )
}

export default Abouts

import GuideData from '@/constant/HomeOne/GuideData'
import GuideCard from './ui/GuideCard'


const Guide = () => {
  return (
    <div className="lg:pt-30 pt-24  relative">
      <img src="/assets/images/illustration/bird-illustration.png" alt="illustration" className="absolute right-0 top-[12%] max-w-[11%] lg:block hidden" />
      <img src="/assets/images/illustration/leaf-illustration.png" alt="illustration" className="absolute left-[2%] top-[40%] max-w-[8%] lg:block hidden" />
      <div className="container">
        <div className="text-center lg:pb-[60px] pb-[40px]">
          <h5 className="section-sub-title-v1">{GuideData?.sub_title}</h5>
          <h2 className="section-title-v1">{GuideData?.Title}</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
          {GuideData?.guides.slice(0.3).map((guide)=>(
            <GuideCard 
              imgUrl={guide.imgUrl}
              name={guide.name}
              designation={guide.designation}
              key={guide.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Guide
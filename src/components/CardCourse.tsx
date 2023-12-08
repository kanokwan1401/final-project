import { Text, ButtonPrimary } from "."

const CardCourse = () => {
  return (
    <div className=" w-[340px] h-[540px] bg-slate-800 rounded-3xl ">
      <img src={''} alt="Course" className=" bg-slate-400 w-full h-[300px] rounded-t-3xl" />
      <div className=" m-4">
        <Text size={20} weight={700} color="rgb(240 ,171 ,252)" className="pb-5">Course Name</Text>
        <Text size={16} weight={400} color="rgb(148 163 184)" className=" font-sansThai ">Discription Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <div className=" flex justify-end mt-6">
          <ButtonPrimary />
        </div>
        <Text size={18} weight={400} color="rgb(148 163 184)" className=" mt-2 font-sansThai">-- &nbsp; ชั่วโมง</Text>
      </div>
    </div>
  )
}

export default CardCourse
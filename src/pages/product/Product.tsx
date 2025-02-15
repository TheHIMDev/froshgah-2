import Button from "../../components/button/Button";
import Container from "../../components/Container/Container";


function Product() {
  return (
    <div>
      <Container>
        <div className="h-80 mt-10 grid grid-cols-12 shadow rounded-[10px]">
            <div className="col-span-10 p-5 text-right gap-4 flex  flex-col ">
                <h1>عنوان محصول</h1>
                <div className="gap-4 flex  flex-col">
                    <p>  قیمت : 500</p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                </div>
            </div>

            <div className=" flex gap-5 flex-col col-span-2 bg-sky-50  rounded-r-[10px] p-6">
                <img className="w-50 h-40 rounded-[10px]" src="https://media.istockphoto.com/id/2163019014/photo/tecnology-world-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=W-I-6efsWmXOzcesfxZD9yPTtM66gRvqNTjAZ9YBtpI=" alt="" />
                <Button className="rounded cursor-pointer" style={{padding:"0.5rem"}} variant="seconed" onClick={()=> alert("show")} > add </Button>
            </div>

            
        </div>
      </Container>
    </div>
  )
}

export default Product;

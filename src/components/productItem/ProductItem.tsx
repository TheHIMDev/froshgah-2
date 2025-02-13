

function ProductItem() {
  return (
    <div className='shadow rounded pb-2'>
      <img className='rounded-t' src='https://media.istockphoto.com/id/2163019014/photo/tecnology-world-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=W-I-6efsWmXOzcesfxZD9yPTtM66gRvqNTjAZ9YBtpI='/>
      <div className='flex justify-between flex-col p-4'>
        <div className='flex justify-between flex-row-reverse'>
            <h3>عنوان محصول</h3>
            <span>55$</span>
        </div>
        

        <div className='mt-6 text-right'>
           <p className='line-clamp-1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
        </div>

      </div>
    </div>
  )
}

export default ProductItem

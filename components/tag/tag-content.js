import 'bootstrap/dist/css/bootstrap.min.css'


export default function TagContent() {
    return (
        <>
            <div className='d-flex justify-content-around pt-5 pb-5'>
                <div style={{cursor:"pointer"}} className='fs-4'><span>#生活</span></div>
                <div style={{cursor:"pointer"}} className='fs-4'><span>#休閒</span></div>
            </div>
        </>
    )
}
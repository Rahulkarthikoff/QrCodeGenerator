import { useState } from "react"

export const Qrcode = () => {
    const [img, setImg] = useState("")
    const [loading, setLoading] = useState(false)
    const [qrData, setQrData] = useState("rahulkarthikeyan")
    const [qrSize, setQrSize] = useState(150);
    async function generateQr(){
        setLoading(true);
        try{
            const url =`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
            setImg(url);
        }catch(error){
            console.error("Error Generating Qr Code",error);
        }finally{
            setLoading(false)
        }
    }

    function downloadQr(){
        if (!img) {
            alert("Please generate a QR Code before downloading.");
            return;
        }
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            const link = document.createElement("a")
            link.href = URL.createObjectURL(blob)
            link.download="qrcode.png"
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>{
            console.error("Error downloading QrCode", error)
        })
    }
  return (
    <div className='app-container'>
        <h1>GEN Qr-Code</h1>
        {loading && <p>Please wait...</p>}
        {img && <img src={img} className="qr-code-image"/>}
        <div>
            <label htmlFor='dataInput' className='input-label'>
                Data for Qr Code : 
                </label>
            <input type="text" id="dataInput" placeholder="Enter data for QrCode" onChange={(e)=>setQrData(e.target.value)}></input>

            <label htmlFor="sizeInput" className="input-label">Image Size (e.g 150)</label>
            <input type="text" id="sizeInput" placeholder="Enter the image size" onChange={(e)=>setQrSize(e.target.value)}></input>

            <button className="GenerateButton" onClick={generateQr} disabled={loading}>{loading ? "Generating..." : "Generate QR Code"}</button>
            <button className="DownloadButton" onClick={downloadQr}>Download QrCode</button>
        </div>
        <p className="footer">Designed By <a href="#">Rahul</a></p>
    </div>
  )
}

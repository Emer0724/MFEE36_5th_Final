export default async function handler(req, res) {
  if (req.method === 'POST') {
    // 這裡是模擬寄送郵件的過程，你需要替換為你自己的實作
    const email = req.body.email
    console.log('Sending reset password email to:', email)

    res.status(200).json({ message: '重置密碼的連結已經寄送到你的信箱' })
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: '只接受 POST 請求' })
  }
}

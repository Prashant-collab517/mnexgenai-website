
import Link from 'next/link'

export default function Home(){
  return (
    <div className='container'>
      <h1 className='text-4xl font-bold mt-10'>The Future of Lead Generation Is Here</h1>
      <p className='mt-3 text-gray-300'>AI that finds your ideal clients, starts conversations, nurtures them, and books meetings for you — 24/7.</p>

      <div className='mt-6 flex gap-4'>
        <Link href='/contact' className='btn btn-primary'>Book a Strategy Call</Link>
        <Link href='/case-study' className='btn'>See Case Study</Link>
      </div>

      <div className='grid md:grid-cols-3 gap-6 mt-14'>
        <div className='card'>
          <h3 className='font-bold'>AI Outreach Engine</h3>
          <p>Multi-channel outreach on LinkedIn, Email, WhatsApp and Social DM.</p>
        </div>
        <div className='card'>
          <h3 className='font-bold'>AI Follow-Ups</h3>
          <p>Never miss a follow-up. AI sequences handle replies & nurturing.</p>
        </div>
        <div className='card '>
          <h3 className='font-bold'>AI CRM</h3>
          <p>Auto notes, scoring & pipeline automation that updates itself.</p>
        </div>
      </div>
    </div>
  )
}

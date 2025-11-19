// pages/index.js
export default function Home() {
  return (
    <main style={{fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial', padding: 40}}>
      <header style={{display: 'flex', alignItems:'center', gap:16}}>
        <img src="/logo.png" alt="MnexGenAI" style={{width:72, height:72, objectFit:'contain'}}/>
        <div>
          <h1 style={{margin:0, fontSize:28}}>MnexGenAI Lead Engine</h1>
          <p style={{margin:0, color:'#666'}}>Automated AI lead generation • CRM workflows • Smart follow-ups</p>
        </div>
      </header>

      <section style={{marginTop:40}}>
        <div style={{background:'#fff', borderRadius:12, padding:24, boxShadow:'0 6px 20px rgba(15,15,30,0.06)'}}>
          <h2 style={{marginTop:0}}>Welcome — demo landing</h2>
          <p>If you can see this page, the site is deployed successfully. Next steps: replace this with the real UI, add hero banners, pages and the full design pack.</p>

          <ul>
            <li>Campaigns sent: 50</li>
            <li>New leads: 120</li>
            <li>Meetings: 30</li>
          </ul>

          <p style={{marginTop:16, color:'#333'}}>— MnexGenAI (co-founder demo page)</p>
        </div>
      </section>
    </main>
  )
}

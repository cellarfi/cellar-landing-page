import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
export default function Landing() {
  return (
    <div className='min-h-screen'>
      <Navigation />

      <section
        id='home'
        className='min-h-screen flex items-center justify-center relative overflow-hidden mt-20'
      >
        <video controls>
          <source
            src='https://static.53.190.27.37.clients.your-server.de/solana-app/cellar_pitch.mp4'
            type='video/mp4'
          />
        </video>
      </section>

      <Footer />
    </div>
  )
}

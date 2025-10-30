import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import DownloadPage from '@/pages/download'
import Landing from '@/pages/landing'
import NotFound from '@/pages/not-found'
import Privacy from '@/pages/privacy'
import Terms from '@/pages/terms'
import { QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import { Route, Switch } from 'wouter'
import { useScrollToTop } from './hooks/use-scroll-to-top'
import { queryClient } from './lib/queryClient'
import RadiantPitch from './pages/radiant-pitch'

function Router() {
  // Add scroll to top behavior
  useScrollToTop()

  return (
    <Switch>
      <Route path='/' component={Landing} />
      <Route path='/download' component={DownloadPage} />
      <Route path='/privacy' component={Privacy} />
      <Route path='/terms' component={Terms} />
      <Route path='/radiant-demo' component={RadiantPitch} />
      {/* <Route path='/pitch-video' component={RadiantPitch} /> */}
      <Route component={NotFound} />
    </Switch>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className='dark'>
          <Toaster />
          <Router />
          <Analytics />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App

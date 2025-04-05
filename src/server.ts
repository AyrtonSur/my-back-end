import { app } from './app'
import { env } from '@/env'

app.listen(
  {
    host: '0.0.0.0',
    port: env.PORT,
  },
  (err, address) => {
    if (err !== null) {
      console.log(err)
      app.log.error(err)
      process.exit(1)
    }

    console.log(
      `🚀 Server running! \nServer listening at ${address}\n\nCtrl+C to Stop,`,
    )
  },
)

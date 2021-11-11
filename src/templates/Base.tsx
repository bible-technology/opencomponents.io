import { Meta } from '../layout/Meta'
import { AppConfig } from '../utils/AppConfig'
import { FrontLanding } from './FrontLanding'

const Base = () => (
    <div className="antialiased text-gray-600">
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <FrontLanding />
    </div>
)

export { Base }

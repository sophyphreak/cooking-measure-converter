import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DotEnv from 'dotenv'

// TODO
//
// -get these to work again

Enzyme.configure({
  adapter: new Adapter()
})

DotEnv.config({ path: '.env.test' })

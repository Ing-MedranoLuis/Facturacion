
import { HeaderTitle } from './shared/HeaderTitle'
import type { propComponent } from './Factura'
import { UseFadeIn } from '../hooks/UseFadeIn'

export const Conducer = ({ icons, buttons }: propComponent) => {
  const {active,durClass } =UseFadeIn('Factura')
  return (
      <div className={`
        ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}
        transition-all ${durClass} ease-in-out
      `}>
          <HeaderTitle title='Conduce' icon={icons } buttons={buttons}/>
    </div>
  )
}

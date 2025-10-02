import { LayoutProps } from 'sanity'

export function StudioLayout(props: LayoutProps) {
  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      {props.renderDefault(props)}
    </div>
  )
}
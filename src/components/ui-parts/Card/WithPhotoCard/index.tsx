import { Typography } from '@/components/ui-elements/Typography'
import { Image } from '@/components/ui-elements/Image'
import { combineStyles } from '@/libs/utils/style'

type Props = {
  title: string
  imgProps: React.ComponentPropsWithRef<typeof Image>
} & React.ComponentPropsWithRef<'div'>

export const WithPhotoCard = ({
  title,
  imgProps: { alt, ...imgProps },
  className,
  children,
  ...props
}: Props) => {
  return (
    <div
      className={combineStyles(
        className,
        'overflow-hidden rounded-lg bg-white shadow',
      )}
      {...props}
    >
      <Image {...imgProps} alt={alt} className="max-h-60" />
      <div className="p-4 grid gap-3">
        <Typography variant="h3" as="p" className="line-clamp-2 min-h-[60px]">
          {title}
        </Typography>
        {children}
      </div>
    </div>
  )
}

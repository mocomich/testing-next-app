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
      <Image {...imgProps} alt={alt} className="max-h-64" />
      <div className="p-4">
        <Typography variant="h3" as="h3" className="line-clamp-2">
          {title}
        </Typography>
        <Typography
          variant="p"
          as="p"
          className="mt-1 text-gray-500 line-clamp-3"
        >
          {children}
        </Typography>
      </div>
    </div>
  )
}

# Shared Images

Place any new image assets here. These files will be publicly served by Next.js at `/shared-images/<filename>`.

You can reference them in your React components like so:

```jsx
import Image from 'next/image';

<Image
  src="/shared-images/your-image.png"
  alt="Description of the image"
  width={XXX}
  height={YYY}
/>
```

This folder lives outside existing asset paths, which helps keep image management simple and avoids merge conflicts with work happening in other branches or by other droids.

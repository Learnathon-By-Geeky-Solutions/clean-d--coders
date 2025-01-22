import { cn } from "@/lib/utils"
import PropTypes from 'prop-types';

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props} />)
  );
}
Skeleton.propTypes = {
  className: PropTypes.string,
};

export { Skeleton }

export default function ProductSkeleton() {
  const skeletonArray = new Array(20)
    .fill("")
    .map((el, index) => <div key={index} className="skeleton h-56 w-44"></div>);

  return (
    <div className="mt-4 flex w-[750px] flex-wrap justify-center gap-4">
      {skeletonArray}
    </div>
  );
}

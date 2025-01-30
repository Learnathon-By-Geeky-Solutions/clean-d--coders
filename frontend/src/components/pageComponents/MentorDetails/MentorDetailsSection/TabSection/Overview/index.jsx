import { Button } from "@/components/ui";
import { getDBValToCamelCase } from "@/utils";
import PropTypes from "prop-types";

const Overview = ({ data }) => {
  return (
    <div className="py-5">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        <p className="opacity-50">Company:</p>
        <p className="col-span-2 md:col-span-5 font-medium">
          {getDBValToCamelCase(data.company)}
        </p>
        <p className="opacity-50">University:</p>
        <p className="col-span-2 md:col-span-5 font-medium">
          {getDBValToCamelCase(data.university)}
        </p>
        <p className="opacity-50">Tags:</p>
        <div className="col-span-2 md:col-span-5 flex flex-wrap gap-1 font-medium">
          {getDBValToCamelCase(data.tags.join("_"))
            .split(" ")
            .map((t) => (
              <Button disabled size="xs" variant="default" className="rounded-3xl p-1 px-3" key={t}>
                {t}
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
};
Overview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Overview;

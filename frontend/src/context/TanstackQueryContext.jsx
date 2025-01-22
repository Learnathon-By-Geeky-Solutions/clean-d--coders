/* eslint-disable react/prop-types */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropTypes from 'prop-types';

const queryClient = new QueryClient()

const TanstackQueryContext = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
TanstackQueryContext.propTypes = {
    children: PropTypes.node.isRequired,
};


export default TanstackQueryContext;
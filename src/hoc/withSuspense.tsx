import React, {FunctionComponent, ReactNode, Suspense} from 'react';
import Loader from "../components/common/PreLoader/Loader";

type Props = {
    children: ReactNode
}

const WithSuspense: React.FC<Props> = ({children}) => {
    return <Suspense fallback={<Loader/>}>{children}</Suspense>
};

export default WithSuspense;
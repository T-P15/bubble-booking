import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

function useQuery() {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    
    const getSearchParam = useCallback((key: string) => {
        const searchParam = searchParams.get(key);

        return searchParam ?? undefined;
    }, [searchParams])

    const hasSearchParam = useCallback((key: string) => {
        const hasSearchParam = searchParams.has(key);

        return hasSearchParam
    }, [searchParams])

    const setSearchParam = useCallback((key: string, value?: string) => {
        const updatedSearchParams = new URLSearchParams(
            Array.from(searchParams.entries()),
        );
        
        if (value) {
            updatedSearchParams.set(key, value);
        } else {
            updatedSearchParams.delete(key);
        }
        const search = updatedSearchParams.toString();
        const query = search ? `?${search}` : "";

        router.push(`${pathName}${query}`);
    }, [pathName, router, searchParams]);

    const clearSearchParams = useCallback(() => {
        router.push(`${pathName}`);
    }, [pathName, router])
        
    return {getSearchParam, setSearchParam, hasSearchParam, clearSearchParams}
}

export default useQuery;
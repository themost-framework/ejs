export declare class ViewEngine {
    static express(): (file: string, locals: any, callback:(err: Error, result?: string) => void) => void;
}
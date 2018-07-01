import './models';
import { Observable } from 'rxjs/Observable';

declare module 'meteor/accounts-base' {
    namespace Accounts {
        function callLoginMethod(options);
    }
}



declare global {
    interface GroundBaseCollection<T> extends Mongo.Collection<any> {
        orgFind?(selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
            sort?: Mongo.SortSpecifier;
            skip?: number;
            limit?: number;
            fields?: Mongo.FieldSpecifier;
            reactive?: boolean;
            transform?: Function;
        }): Mongo.Cursor<T>;
        orgFindOne?(selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
            sort?: Mongo.SortSpecifier;
            skip?: number;
            fields?: Mongo.FieldSpecifier;
            reactive?: boolean;
            transform?: Function;
        }): T;
    }
    interface Array<T> {
        insert(index?: number, item?: any): Array<T> | undefined;
        /**
         * Insert Array or elements in an Array and keep flatten aary
         * Use Like: // ["a", "b", "c", "d"].insert1(2, "V", ["W", "X", "Y"], "Z") call like this will return:
         * Result: // ["a","b","V",["W","X","Y"],"Z","c","d"]
         *
         *
         */
        insertArrayAsArray(index?: number, ...args): Array<T> | undefined;
        /**
         * Insert Array or elements in an Array and keep flatten aary
         * Use like:  ["a", "b", "c", "d"].insertArray(2, 'V', ["W", "X", "Y"])
         * Result: ["a","b","V","W","X","Y","c","d"]
         *
         *
         */
        insertArray(index: number, ...args): Array<T> | undefined;

        /**
         * Flatten a complex Array of Arrays
         * // [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]].flatten()
         * // [0, 1, 2, 3, 4, 5]
         *
         */
        flatten(): T | undefined;

    }

    interface Error {
        code?: number | string;
        message: string;
        reason?: string;
    }
    interface TwitterUser {
        id: string;
        screenName: string;
        accessToken: string;
        accessTokenSecret: string;
        profile_image_url: string;
        profile_image_url_https: string;
        lang: string;
        email: string;
    }
    interface FacebookUser {
        id: string;
        name: string;
        first_name: string;
        last_name: string;
        link: string;
        expiresAt: number;
        accessToken: string;
        locale: string;
        email: string;
        age_range: {
            min: number;
        }
    }
    interface RATING {
        aggregateValue: number;
        ratingA: number;
        ratingB: number;
        ratingC: number;
        ratingD: number;
        ratingE: number;
        reviewCount: number;
    }
    interface USER {
        _id?: string;
        emails?: Array<Meteor.UserEmail>;
        username?: string;
        phone?: {
            number: string;
            verified: boolean;
        };
        services?: {
            phone: {
                verify: {
                    phone: {
                        number: string;
                    };
                    code?: number;
                }
            };
            resume: {
                loginTokens: [
                    {
                        when: Date;
                        hashedToken: string;
                    }
                ]
            };
            facebook: FacebookUser;
            twitter: TwitterUser;
            password: {
                bcrypt: string;
            };
            creditCards: Array<CREDITCARD>;

        };
        profile?: {
            name: string;
            refCode: number;
            cellPhone: string;
            isSetup: boolean;
            address: {
                default: FOCLOCATION;
                locations: Array<FOCLOCATION>;
            };
            aggregateRating: RATING;
            dob: Date;
            code: number;
            designation: string;
            gender: string;
            dpImageId: string;
            bgImageId: string;
            dpThumbUrl: string;
            dpThumb40Url: string;
            dpThumb96Url: string;
            bgUrl: string;
            bgThumb40Url: string;
            bgThumb96Url: string;
            avatar: {
                small: string;
                medium: string;
                large: string;
            };

        };
        business?: {
            address?: {
                default?: FOCLOCATION;
                locations?: Array<FOCLOCATION>
            };
            aggregateRating?: RATING;
            certifications?: Array<any>;
            tagLine?: string;
            tags?: Array<string>;
            organization?: string;
            serviceIds?: Array<string>;
            about?: string,
            businessFax?: string;
            tradeLicense?: string;
            phone?: string;
            since?: number;
            website?: string;
            images?: Array<any>;
        }

        roles?: any;
        updatedAt?: Date;
        createdAt?: number | Date;
        fcmTokens?: Array<string>;
        notificationKey?: string;
        
        distance?: any,
    }

    
}

interface ExternalService {
    login?(nativeLoginService: any);
}
declare module 'meteor/meteor' {
    namespace Meteor {
        function linkWithTwitter();
        function linkWithGoogle();
        var fixonclick: {
            facebook: ExternalService;
            google: ExternalService;
            twitter: ExternalService;
            password: ExternalService;
        }
        /**
         * To Call methods asynchronosly on server and returning values without keeping on hold on client or even on server.
         * Enables Observable event based programming on server.
         * @param promiseOrObservable Variable of type Promise or Observable
         */
        function callAsync(promiseOrObservable: Promise<any> | Observable<any>);
    }    
}

declare module 'meteor/accounts-base' {
    namespace Accounts {
        function callLoginMethod(options);
    }
}


declare namespace gapi.client {
    /**
     * Initializes the JavaScript client with API key, OAuth client ID, scope, and API discovery document(s).
     * If OAuth client ID and scope are provided, this function will load the gapi.auth2 module to perform OAuth.
     * The gapi.client.init function can be run multiple times, such as to set up more APIs, to change API key, or initialize OAuth lazily.
     */
    export function init(args: {
        /**
         * The API Key to use.
         */
        apiKey?: string;
        /**
         * An array of discovery doc URLs or discovery doc JSON objects.
         */
        discoveryDocs?: string[];
        /**
         * The app's client ID, found and created in the Google Developers Console.
         */
        clientId?: string;
        /**
         * The scopes to request, as a space-delimited string.
         */
        scope?: string,

        hosted_domain?: string;
    }): Promise<void>;

    interface RequestOptions {
        /**
         * The URL to handle the request
         */
        path: string;
        /**
         * The HTTP request method to use. Default is GET
         */
        method?: string;
        /**
         * URL params in key-value pair form
         */
        params?: any;
        /**
         * Additional HTTP request headers
         */
        headers?: any;
        /**
         * The HTTP request body (applies to PUT or POST).
         */
        body?: any;
        /**
         * If supplied, the request is executed immediately and no gapi.client.HttpRequest object is returned
         */
        callback?: () => any;
    }

    interface TokenObject {
        /**
         * The access token to use in requests.
         */
        access_token: string;
    }

    /**
     * Loads the client library interface to a particular API. If a callback is not provided, a promise is returned.
     * @param name The name of the API to load.
     * @param version The version of the API to load.
     * @return promise The promise that get's resolved after the request is finished.
     */
    export function load(name: string, version: string): Promise<void>;

    /**
     * Loads the client library interface to a particular API. The new API interface will be in the form gapi.client.api.collection.method.
     * @param name The name of the API to load.
     * @param version The version of the API to load
     * @param callback the function that is called once the API interface is loaded
     * @param url optional, the url of your app - if using Google's APIs, don't set it
     */
    export function load(name: string, version: string, callback: () => any, url?: string): void;
    /**
     * Creates a HTTP request for making RESTful requests.
     * An object encapsulating the various arguments for this method.
     */
    export function request(args: RequestOptions): HttpRequest<any>;
    /**
     * Creates an RPC Request directly. The method name and version identify the method to be executed and the RPC params are provided upon RPC creation.
     * @param method The method to be executed.
     * @param version The version of the API which defines the method to be executed. Defaults to v1
     * @param rpcParams A key-value pair of the params to supply to this RPC
     */
    export function rpcRequest(method: string, version?: string, rpcParams?: any): RpcRequest;
    /**
     * Sets the API key for the application.
     * @param apiKey The API key to set
     */
    export function setApiKey(apiKey: string): void;
    /**
     * Sets the authentication token to use in requests.
     * @param token The token to set.
     *
     * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientsettokentokenobject
     */
    export function setToken(token: TokenObject|null): void;

    interface HttpRequestFulfilled<T> {
        result: T;
        body: string;
        headers?: any[];
        status?: number;
        statusText?: string;
    }

    interface HttpRequestRejected {
        result: {
            error: {
                message: string;
            }
        };
        body: string;
        headers?: any[];
        status?: number;
        statusText?: string;
    }

    /**
     * HttpRequest supports promises.
     * See Google API Client JavaScript Using Promises https://developers.google.com/api-client-library/javascript/features/promises
     */
     class HttpRequestPromise<T> {
        // Taken and adapted from https://github.com/Microsoft/TypeScript/blob/v2.3.1/lib/lib.es5.d.ts#L1343
        then<TResult1, TResult2>(
            onfulfilled?: ((response: HttpRequestFulfilled<T>) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: HttpRequestRejected) => TResult2 | PromiseLike<TResult2>) | undefined | null,
            opt_context?: any
        ): Promise<TResult1 | TResult2>;
    }

    /**
     * An object encapsulating an HTTP request. This object is not instantiated directly, rather it is returned by gapi.client.request.
     */
    export class HttpRequest<T> extends HttpRequestPromise<T> {
        /**
         * Executes the request and runs the supplied callback on response.
         * @param callback The callback function which executes when the request succeeds or fails.
         */
        execute(callback: (
            /**
             * contains the response parsed as JSON. If the response is not JSON, this field will be false.
             */
            jsonResp: T,
            /**
             * is the HTTP response. It is JSON, and can be parsed to an object
             */
            rawResp: {
                body: string;
                headers: any[];
                status: number;
                statusText: string;
            }
            ) => any): void;
    }

    /**
     * Represents an HTTP Batch operation. Individual HTTP requests are added with the add method and the batch is executed using execute.
     */
    export class HttpBatch {
        /**
         * Adds a gapi.client.HttpRequest to the batch.
         * @param httpRequest The HTTP request to add to this batch.
         * @param opt_params extra parameters for this batch entry.
         */
        add(httpRequest: HttpRequest<any>, opt_params?: {
            /**
             * Identifies the response for this request in the map of batch responses. If one is not provided, the system generates a random ID.
             */
            id: string;
            callback: (
                /**
                 * is the response for this request only. Its format is defined by the API method being called.
                 */
                individualResponse: any,
                /**
                 * is the raw batch ID-response map as a string. It contains all responses to all requests in the batch.
                 */
                rawBatchResponse: any
                ) => any
        }): void;
        /**
         * Executes all requests in the batch. The supplied callback is executed on success or failure.
         * @param callback The callback to execute when the batch returns.
         */
        execute(callback: (
            /**
             * is an ID-response map of each requests response.
             */
            responseMap: any,
            /**
             * is the same response, but as an unparsed JSON-string.
             */
            rawBatchResponse: string
            ) => any): void;
    }

    /**
     * Similar to gapi.client.HttpRequest except this object encapsulates requests generated by registered methods.
     */
    export class RpcRequest {

        /**
         * Executes the request and runs the supplied callback with the response.
         * @param callback The callback function which executes when the request succeeds or fails.
         */
        callback(callback: (
            /**
             * contains the response parsed as JSON. If the response is not JSON, this field will be false.
             */
            jsonResp: any,
            /**
             * is the same as jsonResp, except it is a raw string that has not been parsed. It is typically used when the response is not JSON.
             */
            rawResp: string
            ) => void): void;
    }

}
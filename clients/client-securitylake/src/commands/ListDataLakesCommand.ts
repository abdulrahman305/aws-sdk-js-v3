// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListDataLakesRequest, ListDataLakesResponse } from "../models/models_0";
import { de_ListDataLakesCommand, se_ListDataLakesCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDataLakesCommand}.
 */
export interface ListDataLakesCommandInput extends ListDataLakesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataLakesCommand}.
 */
export interface ListDataLakesCommandOutput extends ListDataLakesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services Regions. You can use this operation to determine whether
 *          Security Lake is enabled for a Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, ListDataLakesCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, ListDataLakesCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // ListDataLakesRequest
 *   regions: [ // RegionList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListDataLakesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataLakesResponse
 * //   dataLakes: [ // DataLakeResourceList
 * //     { // DataLakeResource
 * //       dataLakeArn: "STRING_VALUE", // required
 * //       region: "STRING_VALUE", // required
 * //       s3BucketArn: "STRING_VALUE",
 * //       encryptionConfiguration: { // DataLakeEncryptionConfiguration
 * //         kmsKeyId: "STRING_VALUE",
 * //       },
 * //       lifecycleConfiguration: { // DataLakeLifecycleConfiguration
 * //         expiration: { // DataLakeLifecycleExpiration
 * //           days: Number("int"),
 * //         },
 * //         transitions: [ // DataLakeLifecycleTransitionList
 * //           { // DataLakeLifecycleTransition
 * //             storageClass: "STRING_VALUE",
 * //             days: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       replicationConfiguration: { // DataLakeReplicationConfiguration
 * //         regions: [ // RegionList
 * //           "STRING_VALUE",
 * //         ],
 * //         roleArn: "STRING_VALUE",
 * //       },
 * //       createStatus: "INITIALIZED" || "PENDING" || "COMPLETED" || "FAILED",
 * //       updateStatus: { // DataLakeUpdateStatus
 * //         requestId: "STRING_VALUE",
 * //         status: "INITIALIZED" || "PENDING" || "COMPLETED" || "FAILED",
 * //         exception: { // DataLakeUpdateException
 * //           reason: "STRING_VALUE",
 * //           code: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataLakesCommandInput - {@link ListDataLakesCommandInput}
 * @returns {@link ListDataLakesCommandOutput}
 * @see {@link ListDataLakesCommandInput} for command's `input` shape.
 * @see {@link ListDataLakesCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class ListDataLakesCommand extends $Command<
  ListDataLakesCommandInput,
  ListDataLakesCommandOutput,
  SecurityLakeClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListDataLakesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataLakesCommandInput, ListDataLakesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListDataLakesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "ListDataLakesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityLake",
        operation: "ListDataLakes",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListDataLakesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDataLakesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataLakesCommandOutput> {
    return de_ListDataLakesCommand(output, context);
  }
}

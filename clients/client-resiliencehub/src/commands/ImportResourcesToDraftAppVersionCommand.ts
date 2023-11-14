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

import { ImportResourcesToDraftAppVersionRequest, ImportResourcesToDraftAppVersionResponse } from "../models/models_0";
import {
  de_ImportResourcesToDraftAppVersionCommand,
  se_ImportResourcesToDraftAppVersionCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportResourcesToDraftAppVersionCommand}.
 */
export interface ImportResourcesToDraftAppVersionCommandInput extends ImportResourcesToDraftAppVersionRequest {}
/**
 * @public
 *
 * The output of {@link ImportResourcesToDraftAppVersionCommand}.
 */
export interface ImportResourcesToDraftAppVersionCommandOutput
  extends ImportResourcesToDraftAppVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover
 *         the structure and describe your Resilience Hub application</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ImportResourcesToDraftAppVersionCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ImportResourcesToDraftAppVersionCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ImportResourcesToDraftAppVersionRequest
 *   appArn: "STRING_VALUE", // required
 *   sourceArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   terraformSources: [ // TerraformSourceList
 *     { // TerraformSource
 *       s3StateFileUrl: "STRING_VALUE", // required
 *     },
 *   ],
 *   importStrategy: "STRING_VALUE",
 *   eksSources: [ // EksSourceList
 *     { // EksSource
 *       eksClusterArn: "STRING_VALUE", // required
 *       namespaces: [ // EksNamespaceList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ImportResourcesToDraftAppVersionCommand(input);
 * const response = await client.send(command);
 * // { // ImportResourcesToDraftAppVersionResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   sourceArns: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "STRING_VALUE", // required
 * //   terraformSources: [ // TerraformSourceList
 * //     { // TerraformSource
 * //       s3StateFileUrl: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   eksSources: [ // EksSourceList
 * //     { // EksSource
 * //       eksClusterArn: "STRING_VALUE", // required
 * //       namespaces: [ // EksNamespaceList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ImportResourcesToDraftAppVersionCommandInput - {@link ImportResourcesToDraftAppVersionCommandInput}
 * @returns {@link ImportResourcesToDraftAppVersionCommandOutput}
 * @see {@link ImportResourcesToDraftAppVersionCommandInput} for command's `input` shape.
 * @see {@link ImportResourcesToDraftAppVersionCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class ImportResourcesToDraftAppVersionCommand extends $Command<
  ImportResourcesToDraftAppVersionCommandInput,
  ImportResourcesToDraftAppVersionCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: ImportResourcesToDraftAppVersionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportResourcesToDraftAppVersionCommandInput, ImportResourcesToDraftAppVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportResourcesToDraftAppVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ImportResourcesToDraftAppVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsResilienceHub",
        operation: "ImportResourcesToDraftAppVersion",
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
  private serialize(
    input: ImportResourcesToDraftAppVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ImportResourcesToDraftAppVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ImportResourcesToDraftAppVersionCommandOutput> {
    return de_ImportResourcesToDraftAppVersionCommand(output, context);
  }
}

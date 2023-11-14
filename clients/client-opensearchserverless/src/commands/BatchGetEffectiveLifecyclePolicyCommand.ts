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

import { BatchGetEffectiveLifecyclePolicyRequest, BatchGetEffectiveLifecyclePolicyResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import {
  de_BatchGetEffectiveLifecyclePolicyCommand,
  se_BatchGetEffectiveLifecyclePolicyCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetEffectiveLifecyclePolicyCommand}.
 */
export interface BatchGetEffectiveLifecyclePolicyCommandInput extends BatchGetEffectiveLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetEffectiveLifecyclePolicyCommand}.
 */
export interface BatchGetEffectiveLifecyclePolicyCommandOutput
  extends BatchGetEffectiveLifecyclePolicyResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of successful and failed retrievals for the OpenSearch Serverless indexes. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html#serverless-lifecycle-list">Viewing data lifecycle policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, BatchGetEffectiveLifecyclePolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, BatchGetEffectiveLifecyclePolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // BatchGetEffectiveLifecyclePolicyRequest
 *   resourceIdentifiers: [ // LifecyclePolicyResourceIdentifiers // required
 *     { // LifecyclePolicyResourceIdentifier
 *       type: "STRING_VALUE", // required
 *       resource: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetEffectiveLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetEffectiveLifecyclePolicyResponse
 * //   effectiveLifecyclePolicyDetails: [ // EffectiveLifecyclePolicyDetails
 * //     { // EffectiveLifecyclePolicyDetail
 * //       type: "STRING_VALUE",
 * //       resource: "STRING_VALUE",
 * //       policyName: "STRING_VALUE",
 * //       resourceType: "STRING_VALUE",
 * //       retentionPeriod: "STRING_VALUE",
 * //       noMinRetentionPeriod: true || false,
 * //     },
 * //   ],
 * //   effectiveLifecyclePolicyErrorDetails: [ // EffectiveLifecyclePolicyErrorDetails
 * //     { // EffectiveLifecyclePolicyErrorDetail
 * //       type: "STRING_VALUE",
 * //       resource: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetEffectiveLifecyclePolicyCommandInput - {@link BatchGetEffectiveLifecyclePolicyCommandInput}
 * @returns {@link BatchGetEffectiveLifecyclePolicyCommandOutput}
 * @see {@link BatchGetEffectiveLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link BatchGetEffectiveLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 */
export class BatchGetEffectiveLifecyclePolicyCommand extends $Command<
  BatchGetEffectiveLifecyclePolicyCommandInput,
  BatchGetEffectiveLifecyclePolicyCommandOutput,
  OpenSearchServerlessClientResolvedConfig
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
  constructor(readonly input: BatchGetEffectiveLifecyclePolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetEffectiveLifecyclePolicyCommandInput, BatchGetEffectiveLifecyclePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetEffectiveLifecyclePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchServerlessClient";
    const commandName = "BatchGetEffectiveLifecyclePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpenSearchServerless",
        operation: "BatchGetEffectiveLifecyclePolicy",
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
    input: BatchGetEffectiveLifecyclePolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchGetEffectiveLifecyclePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetEffectiveLifecyclePolicyCommandOutput> {
    return de_BatchGetEffectiveLifecyclePolicyCommand(output, context);
  }
}

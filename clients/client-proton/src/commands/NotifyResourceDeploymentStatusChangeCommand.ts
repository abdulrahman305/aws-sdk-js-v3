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

import {
  NotifyResourceDeploymentStatusChangeInput,
  NotifyResourceDeploymentStatusChangeInputFilterSensitiveLog,
  NotifyResourceDeploymentStatusChangeOutput,
} from "../models/models_0";
import {
  de_NotifyResourceDeploymentStatusChangeCommand,
  se_NotifyResourceDeploymentStatusChangeCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link NotifyResourceDeploymentStatusChangeCommand}.
 */
export interface NotifyResourceDeploymentStatusChangeCommandInput extends NotifyResourceDeploymentStatusChangeInput {}
/**
 * @public
 *
 * The output of {@link NotifyResourceDeploymentStatusChangeCommand}.
 */
export interface NotifyResourceDeploymentStatusChangeCommandOutput
  extends NotifyResourceDeploymentStatusChangeOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, NotifyResourceDeploymentStatusChangeCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, NotifyResourceDeploymentStatusChangeCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // NotifyResourceDeploymentStatusChangeInput
 *   resourceArn: "STRING_VALUE", // required
 *   status: "STRING_VALUE",
 *   outputs: [ // OutputsList
 *     { // Output
 *       key: "STRING_VALUE",
 *       valueString: "STRING_VALUE",
 *     },
 *   ],
 *   deploymentId: "STRING_VALUE",
 *   statusMessage: "STRING_VALUE",
 * };
 * const command = new NotifyResourceDeploymentStatusChangeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyResourceDeploymentStatusChangeCommandInput - {@link NotifyResourceDeploymentStatusChangeCommandInput}
 * @returns {@link NotifyResourceDeploymentStatusChangeCommandOutput}
 * @see {@link NotifyResourceDeploymentStatusChangeCommandInput} for command's `input` shape.
 * @see {@link NotifyResourceDeploymentStatusChangeCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html">Proton Quotas</a> in
 *       the <i>Proton User Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class NotifyResourceDeploymentStatusChangeCommand extends $Command<
  NotifyResourceDeploymentStatusChangeCommandInput,
  NotifyResourceDeploymentStatusChangeCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: NotifyResourceDeploymentStatusChangeCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyResourceDeploymentStatusChangeCommandInput, NotifyResourceDeploymentStatusChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, NotifyResourceDeploymentStatusChangeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "NotifyResourceDeploymentStatusChangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyResourceDeploymentStatusChangeInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsProton20200720",
        operation: "NotifyResourceDeploymentStatusChange",
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
    input: NotifyResourceDeploymentStatusChangeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_NotifyResourceDeploymentStatusChangeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NotifyResourceDeploymentStatusChangeCommandOutput> {
    return de_NotifyResourceDeploymentStatusChangeCommand(output, context);
  }
}

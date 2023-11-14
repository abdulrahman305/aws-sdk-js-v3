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

import { DescribeAttachmentRequest, DescribeAttachmentResponse } from "../models/models_0";
import { de_DescribeAttachmentCommand, se_DescribeAttachmentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAttachmentCommand}.
 */
export interface DescribeAttachmentCommandInput extends DescribeAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAttachmentCommand}.
 */
export interface DescribeAttachmentCommandOutput extends DescribeAttachmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the attachment that has the specified ID. Attachments can include screenshots,
 *             error logs, or other files that describe your issue. Attachment IDs are generated by the
 *             case management system when you add an attachment to a case or case communication.
 *             Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are
 *             returned by the <a>DescribeCommunications</a> operation.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeAttachmentCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeAttachmentCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const input = { // DescribeAttachmentRequest
 *   attachmentId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAttachmentResponse
 * //   attachment: { // Attachment
 * //     fileName: "STRING_VALUE",
 * //     data: "BLOB_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAttachmentCommandInput - {@link DescribeAttachmentCommandInput}
 * @returns {@link DescribeAttachmentCommandOutput}
 * @see {@link DescribeAttachmentCommandInput} for command's `input` shape.
 * @see {@link DescribeAttachmentCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link AttachmentIdNotFound} (client fault)
 *  <p>An attachment with the specified ID could not be found.</p>
 *
 * @throws {@link DescribeAttachmentLimitExceeded} (client fault)
 *  <p>The limit for the number of <a>DescribeAttachment</a> requests in a short
 *             period of time has been exceeded.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 */
export class DescribeAttachmentCommand extends $Command<
  DescribeAttachmentCommandInput,
  DescribeAttachmentCommandOutput,
  SupportClientResolvedConfig
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
  constructor(readonly input: DescribeAttachmentCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAttachmentCommandInput, DescribeAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSupport_20130415",
        operation: "DescribeAttachment",
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
  private serialize(input: DescribeAttachmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAttachmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAttachmentCommandOutput> {
    return de_DescribeAttachmentCommand(output, context);
  }
}

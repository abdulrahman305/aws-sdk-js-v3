// smithy-typescript generated code
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

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { QueryIdempotencyTokenAutoFillInput } from "../models/models_0";
import { de_QueryIdempotencyTokenAutoFillCommand, se_QueryIdempotencyTokenAutoFillCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryIdempotencyTokenAutoFillCommand}.
 */
export interface QueryIdempotencyTokenAutoFillCommandInput extends QueryIdempotencyTokenAutoFillInput {}
/**
 * @public
 *
 * The output of {@link QueryIdempotencyTokenAutoFillCommand}.
 */
export interface QueryIdempotencyTokenAutoFillCommandOutput extends __MetadataBearer {}

/**
 * @public
 * Automatically adds idempotency tokens.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, QueryIdempotencyTokenAutoFillCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, QueryIdempotencyTokenAutoFillCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const input = { // QueryIdempotencyTokenAutoFillInput
 *   token: "STRING_VALUE",
 * };
 * const command = new QueryIdempotencyTokenAutoFillCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryIdempotencyTokenAutoFillCommandInput - {@link QueryIdempotencyTokenAutoFillCommandInput}
 * @returns {@link QueryIdempotencyTokenAutoFillCommandOutput}
 * @see {@link QueryIdempotencyTokenAutoFillCommandInput} for command's `input` shape.
 * @see {@link QueryIdempotencyTokenAutoFillCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 * @throws {@link EC2ProtocolServiceException}
 * <p>Base exception class for all service exceptions from EC2Protocol service.</p>
 *
 */
export class QueryIdempotencyTokenAutoFillCommand extends $Command<
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  /**
   * @public
   */
  constructor(readonly input: QueryIdempotencyTokenAutoFillCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryIdempotencyTokenAutoFillCommandInput, QueryIdempotencyTokenAutoFillCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "QueryIdempotencyTokenAutoFillCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsEc2",
        operation: "QueryIdempotencyTokenAutoFill",
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
  private serialize(input: QueryIdempotencyTokenAutoFillCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryIdempotencyTokenAutoFillCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<QueryIdempotencyTokenAutoFillCommandOutput> {
    return de_QueryIdempotencyTokenAutoFillCommand(output, context);
  }
}
